// iterating component to show every one(like a API) -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

export const booksData = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/719QRPf%2BxBL._AC_UX385_.jpg',
    title: 'sudadera zero two',
    from: 'japan'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71%2BZh2AB19L._AC_SL1500_.jpg',
    title: 'funko pop braum', 
    from: 'freljor'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/61-DIZqQr0L.jpg',
    title: 'great teacher onizuka',
    from: 'ozaka'
  }
]

const newBooks = booksData.map((eachBook) => {
    const firstEventClick = () => {
        alert("we continue push ourserlf")
    }
  return(
    <div>
      <img src={eachBook.img} className="size-book"  style={{maxWidth: "20%"}} onClick={firstEventClick}></img>
      <h2>{eachBook.title}</h2>
      <h4>{eachBook.from}</h4>
      <button type="button">i don't speak shooting school</button>
      <hr/>
    </div>
  )
})

export const ShowBookList = () => {
    return newBooks
}