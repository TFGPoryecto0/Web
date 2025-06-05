import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useSupabase } from '../hooks/useSupabase'

export default function Chat() {
  const { user } = useAuth()
  const { supabase } = useSupabase()
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    if (!user) return

    loadMessages()

    const subscription = supabase
      .channel('public:messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        async (payload) => {
          const { user_id, content, id, created_at } = payload.new

          // Obtener el username desde profiles
          const { data: profileData } = await supabase
            .from('profiles')
            .select('username')
            .eq('id', user_id)
            .single()

          setMessages(prev => [
            ...prev,
            {
              id,
              content,
              user_id,
              created_at,
              username: profileData?.username || user_id
            }
          ])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(subscription)
    }
  }, [user])

  const loadMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select(`
        *,
        profile:profiles (username)
      `)
      .order('created_at', { ascending: true })
      .limit(50)

    if (error) {
      console.error('Error loading messages:', error)
      return
    }

    const formatted = data.map((msg) => ({
      ...msg,
      username: msg.profile?.username || msg.user_id
    }))

    setMessages(formatted)
  }

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !user) return

    const { error } = await supabase.from('messages').insert({
      content: newMessage,
      user_id: user.id
    })

    if (error) {
      console.error('Error sending message:', error)
      return
    }

    setNewMessage('')
  }

  if (!user) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Chat Global</h2>
        <p>Debes iniciar sesión para acceder al chat.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Chat Global</h2>

      <div className="bg-gray-800 rounded-lg p-4 h-96 overflow-y-auto mb-4">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-3">
            <strong className="text-yellow-400">{msg.username}: </strong>
            <span>{msg.content}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-grow p-2 rounded bg-gray-700 text-white"
          placeholder="Escribe un mensaje..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}
