import React from 'react'
// import IData from '../interfaces/Data.interface'

interface IData {
    people: {
        name: string
    }[],
    name: string,
    setData: React.Dispatch<React.SetStateAction<{
        name: string;
    }[]>>
};

const List: React.FC<IData> = ({ people, name, setData }) => {
    console.log(people);
    console.log(name);
    
    const updateUser = () => {
        setData([...people, { name: "Kamsi Kodi" }]);
    }
    return (
        <div onClick={updateUser}>
            <h1>List</h1>
        </div>
    )
}

export default List;
