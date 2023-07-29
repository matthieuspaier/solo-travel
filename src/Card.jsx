/* eslint-disable react/prop-types */
export default function Card(props) {
    return (
        <div className="card">
            <div className="card--picbox" >
                <img src={props.imageUrl} alt='you should see an image here'/>
            </div>
            <div className="card--description">
                <div className="card--location">
                    <img src="/here.svg" className="card--location--logo"/>
                    <p className="card--location--coutry">{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl} className="card--location--maps">View on Google Maps</a>
                </div>
                <h2 className='description--title'>{props.title}</h2>
                <p className="description--dates">{props.startDate} - {props.endDate}</p>
                <p className="description--text">{props.description}</p>
            </div>
        </div>
    )
}