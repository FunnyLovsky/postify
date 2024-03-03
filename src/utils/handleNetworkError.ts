export const handleNetworkError = (status: string) => {
    if (!isNaN(+status)) {
        switch (+status) {
            case 400:
                throw new Error(`🚫 ${status} Bad Request: Некорректный запрос.`)
            case 401:
                throw new Error(`🔒 ${status} Unauthorized: Неавторизованный доступ.`)
            case 403:
                throw new Error(`⛔️ ${status} Forbidden: Доступ запрещен.`)
            case 404:
                throw new Error(`🔍 ${status} Not Found: Запрашиваемый ресурс не найден.`)
            case 429:
                throw new Error(
                    `⏳ ${status} Too Many Requests: Слишком много запросов. Пожалуйста, подождите.`
                )
            case 500:
                throw new Error(`🛠 ${status} Internal Server Error: Внутренняя ошибка сервера.`)
            default:
                throw new Error(`❓ ${status} Unknown Error: Неизвестная ошибка.`)
        }
    } else {
        throw new Error('🌐 Сетевая ошибка: Не удалось выполнить запрос.')
    }
}
