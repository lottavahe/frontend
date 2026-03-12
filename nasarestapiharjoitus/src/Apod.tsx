import { useState, useEffect } from "react";

type ApodDataType = {
    copyright: string,
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    title: string,
    url: string,

}

function Apod() {
    const [apodData, setApodData] = useState<ApodDataType | null>(null);
    const [date, setDate] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const fetchData = () => {
        if (date?.trim()) {
            setLoading(true);
            fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY=" + date)
            .then(response => {
                if (!response.ok)
                    throw new Error("Error when fetching APOD data");
                return response.json();
            })
            .then(data => setApodData(data))
            .catch(error => console.error(error))
            .finally(() => {
                setDate("");
                setLoading(false);
            })
        } else {
            alert("enter date first");
        }
    }
   
    return (
        <>
            <h3>Nasa APOD</h3>
            <input
                placeholder="YYYY-MM-DD"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <button disabled={loading} onClick={fetchData}>
                {loading ? "Loading..." : "Fetch"}
                Fetch
            </button>

            <p>{apodData?.explanation}</p>
            {apodData?.media_type == "image" && <img src={apodData?.url} />}
            {apodData?.media_type == "video" && 
                <video controls width="500" height="500">
                    <source src={apodData?.url} type="video/mp4" />
                </video>
            }
        </>
    );
}
export default Apod;