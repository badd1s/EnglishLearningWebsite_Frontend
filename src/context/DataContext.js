import { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    // List Grammar Data
    const [listGram, setListGram] = useState([]);
    const { data: dataListGram, fetchError: fetchErrorListGram, isLoading: isLoadingListGram } = useAxiosFetch('/listGrammar');

    useEffect(() => {
        dataListGram &&
            setListGram(dataListGram);
    }, [dataListGram])

    // List Vocabulary Data
    const [listVocab, setListVocab] = useState([]);
    const { data: dataListVocab, fetchError: fetchErrorListVocab, isLoading: isLoadingListVocab } = useAxiosFetch('/listVocabulary');

    useEffect(() => {
        dataListVocab &&
            setListVocab(dataListVocab);
    }, [dataListVocab])

    return (
        <DataContext.Provider value={{
            fetchErrorListGram, isLoadingListGram, setListGram, listGram,
            fetchErrorListVocab, isLoadingListVocab, setListVocab, listVocab,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;