import React, {useState, useEffect} from "react";
import axios from "axios";


const Search = () => {

    const [term, setTerm] = useState('moldova')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])


    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setDebouncedTerm(term)
        }, 600)

        return () => {
            clearTimeout(timeoutID)
        }
    }, [term])

    useEffect(() => {

        const searchResult = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                }
            })

            setResults(data.query.search);
        }
        if (debouncedTerm)
            searchResult()


    }, [debouncedTerm])


    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    > Go
                    </a>
                </div>
                <div className="container">
                    <h3 className="header">
                        {result.title}
                    </h3>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}} />
                </div>
            </div>
        )
    })

    return (
        <div className="ui">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        type="text"
                        className="searchInput"
                        value={term}
                        onChange={(e) => {
                            setTerm(e.target.value)
                        }}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search


