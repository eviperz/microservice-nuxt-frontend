export default async function<T>(path:string, options : {}){
    const config = useRuntimeConfig()
    return await useFetch<T>(path, {
        ...options,
        baseURL: config.public.URL_ENDPOINT,
        headers:{
            "Accept": "application/json"
        }
    })
}