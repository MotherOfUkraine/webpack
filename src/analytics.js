function createAnalytics() {
  let counter = 0
  let isDestroyed = false
  const listener = () => {
    counter++
  }
  document.addEventListener('click', listener)
  return {
    destroy() {
      document.removeEventListener('click', listener)
      isDestroyed = true
    },
    getClicks() {
      if (isDestroyed) {
        return 'Destroyed 12'
      }
      return counter
    },
  }
}

window.analytics = createAnalytics()
