import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const UpdateBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    const { author, title, description, date, imgUrl, category, _id } = blog
    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
            .then(res => res.json())
            .then(blog => setBlog(blog))
    }, []);

    const handleChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value, })
    }

    const imgbbApiKey = '92a0ac09a387a131feb37c056488ca5e';
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', imgUrl);
        fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(img => {
                if (img.success) {
                    console.log(img)
                    fetch(`http://localhost:5000/blog/${_id}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({
                            ...blog,
                            imgUrl: img.data.url,
                            category: e.target.category.value
                        })
                    })
                }
            })
    }

    return (
        <>
            <h1 className="font-medium leading-tight text-3xl mt-0 mb-2 text-grey-darker">Update Blog Hre</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            Author Name
                        </label>
                        <input
                            onChange={handleChange}
                            value={author}
                            name="author"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Name" />
                        <p className="text-red text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                            Blog Title
                        </label>
                        <input
                            onChange={handleChange}
                            value={title}
                            name="title"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Title" />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                            Blog Description
                        </label>
                        <textarea
                            onChange={handleChange}
                            value={description}
                            name="description"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 h-32" id="grid-password" type="text" placeholder="Description..." />
                        <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                            Blog Image
                        </label>
                        <input
                            onChange={(e) => setBlog({ ...blog, imgUrl: e.target.files[0] })}
                            name="imgUrl"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 " id="grid-city" type="file" />
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            Category
                        </label>
                        <div className="relative">
                            <select
                                id="category"
                                className="block w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded">
                                <option>{category}</option>
                                <option value="javascript">JavaScript</option>
                                <option value="reactjs">React JS</option>
                                <option value="nextjs">Next JS</option>
                                <option value="python">Python</option>
                                <option value="beginners">Beginners</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                            Date
                        </label>
                        <input
                            onChange={handleChange}
                            name="date"
                            placeholder="Select a date"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 " id="grid-zip" type="date" />
                    </div>
                </div>
                <div className="flex space-x-2 justify-end mt-3">
                    <button type="submit" className="inline-block px-7 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                </div>
            </form>

        </>
    )
}
export default UpdateBlog;
//imgUrl:"C:\\fakepath\\coding.jpg"