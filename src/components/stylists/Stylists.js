export const StylistList = (props) => {


    return <article className='stylists option'>
      <h1>List of Stylists</h1>
      <select id="stylist">
        <option value={0}>Please choose a stylist...</option>
        {
          props.stylists.map(
            (stylist) => {
              return <option key={`stylist--${stylist.id}`}
                          value={stylist.id}>{stylist.firstName} {stylist.lastName}</option>
            }
          )
        }
      </select>
    </article>
}
