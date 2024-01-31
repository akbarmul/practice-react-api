import React, { useState } from 'react'
import Layout from '../components/Layout'

export default function AddProduct() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const data = await fetch('https://dummyjson.com/products/add', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          description: desc,
          price: price
        })

      })

      const res = await data.json()

      alert(`berhasil add product' ${res.title},${res.price}`)
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <Layout>
      <section className='container'>
        <form className='mx-auto bg-slate-100 w-1/3 flex flex-col gap-5' onSubmit={handleSubmit}>
          {/* input title */}
          <div className='mx-auto'>
            <label className='block' htmlFor="title">Title</label>
            <input type="text" id="title" placeholder='title product' required
              onInput={(e) => { setTitle(e.target.value) }} />
          </div>
          {/* input description */}
          <div className='mx-auto'>
            <label className='block' htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" rows="10" placeholder='description products' required onInput={(e) => { setDesc(e.target.value) }} ></textarea>
          </div>

          {/* input price */}
          <div className='mx-auto'>
            <label className='block' htmlFor="price">Price</label>
            <input type="number" name="price" id="price" placeholder='price product...' required onInput={(e) => { setPrice(e.target.value) }} />
          </div>
          <button className='w-1/3 mx-auto px-3 py-2 bg-green-500 rounded-md'>Add</button>
        </form>
      </section>
    </Layout>
  )
}
