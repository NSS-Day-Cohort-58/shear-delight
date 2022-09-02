export const Style = ({ style }) => {
    return <div className='style' >
    <input type="radio" name="stylist" value={style.id} /> {style.description}
</div>
}