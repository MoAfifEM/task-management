import { ref, onUnmounted } from 'vue'
import { io } from 'socket.io-client'

export function useSocket(eventName: string, url = 'https://task-staging.encoremed.io') {
  const data = ref(null)
  const socket = io(url)

  socket.on(eventName, (payload) => {
    data.value = payload
  })

  onUnmounted(() => {
    socket.off(eventName)
    socket.disconnect()
  })

  return { data }
}
