//project menampilkan news feed dari API
// * Request Top HeadLine from https://newsapi.org/
// * Show Loading message while fetching
// * Handle Error
// * Complete functionality of "load more" & "refresh" button

// useState untuk membuat state, useEffect untuk me request API
import React, {useState, useEffect} from 'react'


// membuat function component
export default function NewsFeed() {

    //membuat nilai default untuk News (isinya mengikuti dari API)
    const defaultNews={
        status: "ok",
        totalResult: 0,
        articles: []
    }

    //membuat variabel endpoint untuk menampung url API
    const endpoint = "https://newsapi.org/v2/top-headlines?country=us&apiKey=47bc6ddf74464a07b1f981dab78f9e63"

    //MEMBUAT STRUKTUR STATE
    
    // news untuk menampung hasil dari API     
    const [news, setNews] = useState(defaultNews)
    
    // page untuk pagination
    const [page, setPage] = useState(0)
     
    // isLoading untuk penanda message saat loading
    const [isLoading, setLoading] = useState(false)
    
    // isError untuk handling error
    const [isError, setError] = useState(false)
    
    // isRefresh untuk handling button refresh
    const [isRefresh, setRefresh] = useState(false)
    
    useEffect(() =>{

        
        //dapat menggunakan promise / async-await, namun disini digunakan async-await
        const fetchData = async() => {
             //melakukan loading ketika set news belum dijalankan
            setLoading(true)

            try {
                const response = await fetch(`${endpoint}&page=${page}`)
                const result = await response.json()
    
                //untuk menimpa default state dari news
                setNews(current=>{
                    return( {
                        //spread data
                        ...result,
                        // artilcles diambil dari state yg sekarang
                        articles: [...current.articles,...result.articles],
                        totalResults: result.totalResults,
                        status: result.status
                    }
                    )
                })

                if (result.status !="ok"){
                    throw new Error('error')
                }


            } catch (error) {
                setError(true)
            }

           

            //setelah news dijalankan maka loading berhenti
            setLoading(false)
        }

        //memanggil function fetchData
        fetchData()
    })

    return (
        <>
            <h3>Top HeadLine</h3>

            {/* //membuat conditional rendering */}
            {isLoading && <p>Loading...</p>}
            {isError && <p>Silahkan periksa jaringan anda..</p>}
            <ol>
                {news.articles.map((item,index)=> (
                    <li key={index}> {item.title}</li>
                ))}
            </ol>
            <button disabled={isLoading} className="Button" style={{margin: 3}}>Load More</button>
            <button disabled={isLoading} className="Button">Refresh</button>
            
        </>
    )
}
