import { EventEmitter } from 'events'
import { onDestroy } from 'svelte'
const bus = new EventEmitter()

function onListenEvent(event: MessageEvent) {
  const { name, payload } = event.data

  bus.emit(name, payload)
}

export function useEvent(eventName: string, callback: (payload: any) => any) {
  bus.on(eventName, callback)

  onDestroy(() => {
    bus.removeListener(eventName, callback)
  })
}

window.addEventListener('message', onListenEvent)
