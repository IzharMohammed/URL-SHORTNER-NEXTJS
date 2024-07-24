
async function getAllUrls() {
    console.log('bhaiiii aajaaa', process.env);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Urls`);
    return response.json();
}

export default async function urlList() {
    let urls;
    try {
        urls = await getAllUrls();
        console.log(urls);
        
    } catch (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
                    <h1 className="text-3xl font-bold mg-6 text-center text-gray-700">Error</h1>
                    <p className="text-center text-red-500">Failed to load urls</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <ul>
                {
                    urls.urls && urls.urls.map((list : any) => (
                        <li key={list.id}>{list. shortUrl}</li>
                    ))
                }
            </ul>

        </>
    )



}