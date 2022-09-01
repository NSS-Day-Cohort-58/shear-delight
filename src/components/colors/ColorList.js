export const ColorList = ({ colorArray }) => {


    return <article className='colors option'>
    <h1>List of Colors</h1>
    {
      colorArray.map(
        (color) => {
          return <div className='color' key={`color--${color.id}`}>
            <input type="radio" name="stylist" value={color.id} /> {color.color}
          </div>
        }
      )
    }
  </article>
}