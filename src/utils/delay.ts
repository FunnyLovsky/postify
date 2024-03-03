export const delay = (ms: number = 1000) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}
