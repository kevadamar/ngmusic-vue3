export const getList = async ({ search = '', page = 1 }) => {
    try {
        let limit = 10
        console.log('masok')
        const data = await fetch(
            `https://itunes.apple.com/search?term=${search}&limit=${limit}&offset=${page}`,
            {
                headers: { 'Content-type': 'application/json' },
            }
        ).then((e) => e.json())

        return {
            data,
            status: true,
            message: `Success Get All Music By Search ${search}`,
        }
    } catch (error) {
        return {
            data: null,
            status: false,
            message: error,
        }
    }
}
