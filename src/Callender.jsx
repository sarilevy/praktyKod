import "./Callender.css"

export const DynamicStyle = ({ setColor, setBackGroundColor }) => {
    return (
        <>
            <input type="color" onChange={(e) => setColor(e.target.value)} placeholder="הכנס צבע"></input>
            <input type="color" onChange={(e) => setBackGroundColor(e.target.value)} placeholder="הכנס צבע רקע רקע"></input>
        </>
    )
}

export const Year = ({ color, backGroundColor, BasicCalender, daysMap }) => {
    return (
        <>                                      
            <div className="year" style={{ backgroundColor: backGroundColor }}>
                <h1 style={{ color }}>לוח שנה</h1>
                {/* הצגת החודשים */}
                <div className="months"> 
                    {BasicCalender.Months.map((Month, mi) => ( //מעבר על החודשים
                        <div key={mi} className="month" style={{ borderColor: color }}>
                            <h2 style={{ color }}>{Month.name}</h2>  {/* הצגת שם החודש */}
                            {/* הצגת הימים */}
                            <div className="days">
                                {(() => {
                                    const WEEK = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
                                    const firstDow = Month?.Days?.[0]?.dayOfWeek ?? 'ראשון'; //אם היום הראשון בחודש הוא ראשון
                                    const startIdx = Math.max(0, WEEK.indexOf(firstDow)); // אם לא נמצא → ‎-1‎, אז נהפוך ל־0
                                    return [...new Array(startIdx)].map((_, i) => (
                                        <div key={`empty-start-${mi}-${i}`} className="day empty" />
                                    ));
                                })()}


                                {Month.Days.map((day, di) => ( //הצגת היום
                                    <div key={di} className="day" style={{ backgroundColor: color + "20" }}>
                                        <div>
                                            <strong>{day.name}</strong> יום {day.dayOfWeek}
                                        </div>

                                        {Array.isArray(day.events) && day.events.length > 0 && ( //הצגת האירועים
                                            <ul>
                                                {day.events.map((ev, ei) => (
                                                    <li key={ei}>
                                                        <span style={{ marginRight: 4 }}>{ev.type}</span> {ev.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
