// başlık, açıklama, kategori, süre

import React, { useState } from 'react'

export default function Notlar() { // title,category,description,time,id tanımladım ve notes listesini tanımladım icine bir seyler attım gozuksun diye.
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDesc] = useState('');
    const [time, setTime] = useState('');
    const [id, setID] = useState(0);
    const [notes, setNotes] = useState([
        { title: "Matematik", category: "school", description: "MATmatmatmatmat", time: "3 gün" },
        { title: "Fizik", category: "school", description: "MATmatmatmatmat", time: "3 gün" },
        { title: "Kimya", category: "school", description: "MATmatmatmatmat", time: "3 gün" }



    ])
    const [editMode, setEditMode] = useState(false); // editMode'u false olarak ayarladım sonradan update isleminde kullanmak için
    const [editNoteId, setEditNoteId] = useState(); // editliceğim notun Id sini bulmak için bunu kullanıcam
    const addNote = () => {
        if (editMode) { // eğer editMode da ise  notes listesinin içini gezsin ve bir kopyasını olustursun:updateNotes isimli. 

            const updateNotes = notes.map((note) => {
                if (note.id === editNoteId) {
                    return {
                        ...note, // note ' un tum nesnelerini kopyalasın diye yazdık bunu titleın falan yeni değerlere guncellenmesini sağlıyor
                        title,
                        category,
                        description,
                        time
                    };

                }
                return note;
            });
            setNotes(updateNotes); // notes içindekileri updateNotestakiler olaarak degistir cunku updateNotes zaten notes un kopyası (guncellenmis halinin)
            setEditMode(false);
            setEditNoteId('');
        } else {
            setID(id + 1);
            setNotes([...notes, { title, category, description, time, id }])
        }

        setTitle('');
        setCategory('')
        setDesc('')
        setTime('')

    }
    const editNote = (note) => {
        setEditMode(true);
        setEditNoteId(note.id);
        setTitle(note.title);
        setCategory(note.category);
        setDesc(note.description);
        setTime(note.time);
    }
    const deleteNote = (d) => {
        setNotes(notes.filter((e) => e.id !== d.id))
    }
    return (
        <div>
            {notes.map((i) => {
                return (
                    <div key={i.id} className='container'>
                        <div className='row'>

                            <div className='col-3'>
                                <h5>Title</h5>
                                <span>{i.title}</span>
                            </div>
                            <div className='col-3'>
                                <h5>Category</h5>
                                <span>{i.category}</span>


                            </div>
                            <div className='col-3'>
                                <h5>Description</h5>
                                <span>{i.description}</span>


                            </div>
                            <div className='col-3'>
                                <h5>Time</h5>
                                <span>{i.time}</span>
                            </div>


                        </div>
                        <div className='col-1'>
                            <div className='flex-container float-right'>
                                <button className='btn btn-primary' onClick={() => editNote(i)}>Edit </button>
                                <button className='btn btn-primary' onClick={() => deleteNote(i)}>Delete </button>

                            </div>
                        </div>
                        

                    </div>
                )
            }
            )}
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <input onChange={(e) => setTitle(e.target.value)} placeholder='Title'></input>

                    </div>
                    <div className='col-3'>
                        <input onChange={(e) => setCategory(e.target.value)} placeholder='Category'></input>

                    </div>
                    <div className='col-3'>
                        <input onChange={(e) => setDesc(e.target.value)} placeholder='Description'></input>

                    </div>
                    <div className='col-3'>
                        <input onChange={(e) => setTime(e.target.value)} placeholder='Time'></input>

                    </div>
                    <div className='col-12'>
                        <button className='btn btn-dark' onClick={addNote}>
                            {editMode ? 'Update Note' : 'Add New Note'}
                        </button>

                    </div>

                </div>
            </div>
        </div>

    )
}
