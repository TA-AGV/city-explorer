function Weather(props){
    return(
        <section>
            <h2> Weather</h2>
            {props.weather.map((day,index)=>(
                <div key={index}>
                    <p> day: {day.date}</p>
                    <p>description: {day.description}</p>
                    <p>country_code: {day.code_country}</p>
                </div>
            ))}
        </section>
    );
}
export default Weather;