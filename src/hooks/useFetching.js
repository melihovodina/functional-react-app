import { useState } from "react"
export const useFetching = (callback) => {
    //Переменная, определяющая загрузку постов(вместо "List's empty", будет анимация)
    const [isLoading, setIsLoading] = useState(false)
    //Переменная ошибки
    const [error, setError] = useState('')
    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch(e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}