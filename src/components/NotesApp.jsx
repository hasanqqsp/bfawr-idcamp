import React from "react";
import Header from "./Header";
import Main from "../pages/Main"
import Footer from "./Footer";
import Detail from "../pages/Detail";
import Create from "../pages/Create";
import { Routes, Route } from "react-router-dom"
import { useSearchParams } from "react-router-dom";
class NotesApp extends React.Component {
    getInitialData() {
        return [
            {
            id: 1,
            title: "Babel",
            body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
            },
            {
            id: 2,
            title: "Functional Component",
            body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
            },
            {
            id: 3,
            title: "Modularization",
            body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
            },
            {
            id: 4,
            title: "Lifecycle",
            body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
            },
            {
            id: 5,
            title: "ESM",
            body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
            },
            {
            id: 6,
            title: "Module Bundler",
            body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
            },
            {
            id: 7,
            title: "Babel Archived",
            body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: true,
            },
            {
            id: 8,
            title: "Module Bundler Archived",
            body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: true,
            },
        ]
        
    }

    constructor (props) {
        super(props)
        this.state = {
            data : [...this.getInitialData()],
            isArchived : false,
            searchKeyword : props.defaultKeyword || "",
            isModalShow : false
        }
        this.onNavigate = this.onNavigate.bind(this)
        this.onSearch = this.onSearch.bind(this)
        this.getShowedData = this.getShowedData.bind(this)
        this.onDeleteHandler =  this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.getNote = this.getNote.bind(this)
        this.modalToggle = this.modalToggle.bind(this)
        this.addNoteHandler = this.addNoteHandler.bind(this)
    }  

    getShowedData () {
        return this.state.data.filter((el) => (
                el.archived === this.state.isArchived && el.title.toLowerCase().includes(this.state.searchKeyword)
            )
        )
    }

    onNavigate (e) {
        this.setState({
            isArchived : e === "archived",
        })
        
        }
    onSearch (e) {
        this.setState({
            searchKeyword : e.target.value,
        })
        this.props.keywordChange(e.target.value);
    }

    onDeleteHandler (id) {
        this.setState(oldState => {
            const data = [...oldState.data]
            const index = data.findIndex((e)=> String(id) === String(e.id))
            if ( index > -1) {data.splice(index,1)}
            
            return {
                data
            }
        })
    }

    getNote(id) {
        return this.state.data.find(e => String(e.id) === String(id))
    }

    onArchiveHandler (id) {
        this.setState(oldState => {
            const data = [...oldState.data]
            const index = data.findIndex((e)=> String(id) === String(e.id))
            data[index].archived = data[index].archived ? false : true
            return {
                data
            }
        })
    }

    modalToggle(){
        this.setState((old)=>{
            return {
                isModalShow : !old.isModalShow
            }
        })
    }

    addNoteHandler(data){
        this.setState(
            (oldState) => ({
                showForm : false,
                data : [...oldState.data,data],
                showedNote : [...oldState.data,data].filter(e => e.archived === data.archived),
                isArchived : data.archived
            })
        )
    }
    
    render () {
        let showedNotes = this.getShowedData()
        
        return (
            <>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main 
                        showedNotes={showedNotes} 
                        isArchived={this.state.isArchived} 
                        onNavigate={this.onNavigate} 
                        onSearch={this.onSearch}
                        searchKeyword={this.state.searchKeyword}
                        onDelete={this.onDeleteHandler}
                        onArchive={this.onArchiveHandler}
                        isModalShow={this.state.isModalShow}
                        modalToggle={this.modalToggle}
                        />} />
                    
                    <Route path="/:id" element={
                        <Detail getNote={this.getNote} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} isShow={this.state.isShow} modalToggle={this.modalToggle}/>
                        } />
                    <Route path="/create" element={
                        <Create addNoteHandler={this.addNoteHandler}/>
                    }/>
                </Routes>
                    
                
                <Footer/>
            </>
        )
    }
}

function NotesAppWrapper(){
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('search');
    function changeSearchParams(keyword) {
        setSearchParams({ search : keyword });
    }

    return <NotesApp defaultKeyword={keyword} keywordChange={changeSearchParams}/>
}
export default NotesAppWrapper