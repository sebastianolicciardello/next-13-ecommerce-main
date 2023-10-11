"use client"

import React, { useState } from 'react'

function AdminForm() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        image: "",
        price: 0
    })

    const handleCreateButtonClick = () => {
        if (isFormOpen) {
            setIsFormOpen(false);
        } else {
            setIsFormOpen(true);
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Qui puoi inviare i dati del nuovo prodotto al tuo backend o eseguire altre azioni necessarie.
        console.log('Nuovo prodotto:', newProduct);
        setIsFormOpen(false); // Chiudi il form dopo l'invio dei dati.
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value,
        });
    };


    return (
        <div>
            <button
                className='rounded-md bg-indigo-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700 mb-10'
                onClick={handleCreateButtonClick}
            >
                Create
            </button>

            {isFormOpen ? (
                <div className="my-5">
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={newProduct.name}
                                onChange={handleInputChange}
                                className="rounded-md border border-gray-300 p-2 w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={newProduct.description}
                                onChange={handleInputChange}
                                className="rounded-md border border-gray-300 p-2 w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700">Price</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={newProduct.price}
                                onChange={handleInputChange}
                                className="rounded-md border border-gray-300 p-2 w-full"
                            />
                        </div>

                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            ) : null}
        </div>
    );
}

export default AdminForm;