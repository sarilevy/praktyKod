import { useRef, useState } from "react"

export const AddEvent = ({ setBasicCalender, BasicCalender, name }) => {
    const [thisM, setThisM] = useState(null)
    const newEventRef = useRef()
    const [thisD, setThisD] = useState(null)

    const addEevent = () => {

        if (thisM === null || thisD === null) return
        // אם לא נבחר יום לא להוסיף
        const mon = [...BasicCalender.Months]
        const d = [...mon[thisM].Days]
        const dayEvents = [...d[thisD].events];
        dayEvents.push({ text: newEventRef.current.value });
        d[thisD].events=dayEvents
        mon[thisM].Days=d
        setBasicCalender({ ...BasicCalender, Months: mon })
        const str= JSON.stringify(BasicCalender)
        localStorage.setItem(name, str)
    }
    // const addEevent = () => {
    //     // אם לא נבחר חודש או יום - לא מוסיפים
    //     if (thisM === null || thisD === null) {
    //         alert("אנא בחר חודש ויום");
    //         return;
    //     }

    //     setBasicCalender(prev => {
    //         // יוצרים עותק חדש של החודשים
    //         const mon = [...prev.Months];
    //         const d = [...mon[thisM].Days];
    //         const dayEvents = [...d[thisD].events];

    //         // מוסיפים את האירוע החדש
    //         dayEvents.push({ text: newEventRef.current.value });

    //         // מעדכנים את היום בלוח
    //         d[thisD].events = dayEvents;
    //         mon[thisM].Days = d;

    //         // יוצרים אובייקט לוח שנה חדש
    //         const newCalendar = { ...prev, Months: mon };

    //         // שומרים בלוקל סטורייג
    //         localStorage.setItem(name, JSON.stringify(newCalendar));

    //         return newCalendar; // מחזירים את הסטייט החדש
    //     });

    //     // אופציונלי: נקה את השדה אחרי שמירת האירוע
    //     newEventRef.current.value = "";
    // }





    return (
        <>
            <select
                value={thisM}                 // value במקום defaultValue
                onChange={(event) => {
                    setThisM(event.target.value); // לא עושים parseInt
                    setThisD("");                // מאפסים את היום כשמשנים חודש
                }}
            >
                <option disabled value="">בחר חודש</option>
                {BasicCalender.Months.map((month, i) => (
                    <option key={i} value={i}>{month.name}</option> // הערך נשאר string
                ))}
            </select>

            {thisM !== "" && (
                <select
                    value={thisD}
                    onChange={(event) => setThisD(event.target.value)}
                >
                    <option disabled value="">בחר יום</option>
                    {BasicCalender?.Months[thisM]?.Days?.map((day, i) => (
                        <option key={i} value={i}>{day.name}</option>
                    ))}
                </select>
            )}

            <input placeholder="input event" ref={newEventRef} />
            <button onClick={addEevent}>add</button>
        </>
    )
}
