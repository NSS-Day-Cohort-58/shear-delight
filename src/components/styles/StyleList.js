export const StyleList = ({ styles }) => {
    return <article className='styles option'>
        <h1>List of Styles</h1>
        {
            styles.map(
                (style) => {
                    return <div className='style' key={`style--${style.id}`}>
                        <input type="radio" name="stylist" value={style.id} /> {style.description}
                    </div>
                }
            )
        }
    </article>
}
