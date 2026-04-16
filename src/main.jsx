import { Year, DynamicStyle } from "./Callender"
import { useState, useEffect } from 'react'
import { Act } from "./Act"
import { AddEvent } from "./AddEvent"
import { Login } from "./Login"
import { ChooseCallender } from "./ChooseCallender"

export const Main = () => {
    const [name, setName] = useState("")
    const [backGroundColor, setBackGroundColor] = useState("pink")
    const [color, setColor] = useState("red")
    const [showDynamicStyle, setShowDynamicStyle] = useState(false)
    const [counter, setCounter] = useState(0)
    const [refresh, setRefresh] = useState(0);

    const [BasicCalender, setBasicCalender] = useState({
        Months: [
            {
                name: 'תשרי',
                Days: [
                    { name: 'א', dayOfWeek: "שלישי", events: [{ type: '🍎', text: 'א דראש השנה' }] },
                    { name: 'ב', dayOfWeek: "רביעי", events: [{ type: '🍎', text: 'ב דראש השנה' }] },
                    { name: 'ג', dayOfWeek: "חמישי", events: [{ type: '❎', text: 'צום גדליה' }] },
                    { name: 'ד', dayOfWeek: "שישי", events: [] },
                    { name: 'ה', dayOfWeek: "שבת", events: [] },
                    { name: 'ו', dayOfWeek: "ראשון", events: [] },
                    { name: 'ז', dayOfWeek: "שני", events: [] },
                    { name: 'ח', dayOfWeek: "שלישי", events: [] },
                    { name: 'ט', dayOfWeek: "רביעי", events: [] },
                    { name: 'י', dayOfWeek: "חמישי", events: [{ type: '❎', text: 'יום הכיפורים' }] },
                    { name: 'יא', dayOfWeek: "שישי", events: [] },
                    { name: 'יב', dayOfWeek: "שבת", events: [] },
                    { name: 'יג', dayOfWeek: "ראשון", events: [] },
                    { name: 'יד', dayOfWeek: "שני", events: [] },
                    { name: 'טו', dayOfWeek: "שלישי", events: [{ type: '🍋', text: 'יום טוב סוכות' }] },
                    { name: 'טז', dayOfWeek: "רביעי", events: [{ type: '🍋', text: 'א דחול המועד' }] },
                    { name: 'יז', dayOfWeek: "חמישי", events: [{ type: '🍋', text: 'ב דחול המועד' }] },
                    { name: 'יח', dayOfWeek: "שישי", events: [{ type: '🍋', text: 'ג דחול המועד' }] },
                    { name: 'יט', dayOfWeek: "שבת", events: [{ type: '🍋', text: 'ד דחול המועד' }] },
                    { name: 'כ', dayOfWeek: "ראשון", events: [{ type: '🍋', text: 'ה דחול המועד' }] },
                    { name: 'כא', dayOfWeek: "שני", events: [{ type: '🌿', text: 'הושענא רבא' }] },
                    { name: 'כב', dayOfWeek: "שלישי", events: [{ type: '📖', text: 'שמיני עצרת ושמחת תורה' }] },
                    { name: 'כג', dayOfWeek: "רביעי", events: [] },
                    { name: 'כד', dayOfWeek: "חמישי", events: [] },
                    { name: 'כה', dayOfWeek: "שישי", events: [] },
                    { name: 'כו', dayOfWeek: "שבת", events: [] },
                    { name: 'כז', dayOfWeek: "ראשון", events: [] },
                    { name: 'כח', dayOfWeek: "שני", events: [] },
                    { name: 'כט', dayOfWeek: "שלישי", events: [] },
                    { name: 'ל', dayOfWeek: "רביעי", events: [] },
                ]
            },


            {
                name: 'חשוון',
                Days: [
                    { name: 'א', dayOfWeek: "חמישי", events: [] },
                    { name: 'ב', dayOfWeek: "שישי", events: [] },
                    { name: 'ג', dayOfWeek: "רביעי", events: [] },
                    { name: 'ד', dayOfWeek: "חמישי", events: [] },
                    { name: 'ה', dayOfWeek: "שישי", events: [] },
                    { name: 'ו', dayOfWeek: "שבת", events: [] },
                    { name: 'ז', dayOfWeek: "ראשון", events: [] },
                    { name: 'ח', dayOfWeek: "שני", events: [] },
                    { name: 'ט', dayOfWeek: "שלישי", events: [] },
                    { name: 'י', dayOfWeek: "רביעי", events: [] },
                    { name: 'יא', dayOfWeek: "חמישי", events: [] },
                    { name: 'יב', dayOfWeek: "שישי", events: [] },
                    { name: 'יג', dayOfWeek: "רביעי", events: [] },
                    { name: 'יד', dayOfWeek: "חמישי", events: [] },
                    { name: 'טו', dayOfWeek: "שישי", events: [] },
                    { name: 'טז', dayOfWeek: "שבת", events: [] },
                    { name: 'יז', dayOfWeek: "ראשון", events: [] },
                    { name: 'יח', dayOfWeek: "שני", events: [] },
                    { name: 'יט', dayOfWeek: "שלישי", events: [] },
                    { name: 'כ', dayOfWeek: "רביעי", events: [] },
                    { name: 'כא', dayOfWeek: "חמישי", events: [] },
                    { name: 'כב', dayOfWeek: "שישי", events: [] },
                    { name: 'כג', dayOfWeek: "רביעי", events: [] },
                    { name: 'כד', dayOfWeek: "חמישי", events: [] },
                    { name: 'כה', dayOfWeek: "שישי", events: [] },
                    { name: 'כו', dayOfWeek: "שבת", events: [] },
                    { name: 'כז', dayOfWeek: "ראשון", events: [] },
                    { name: 'כח', dayOfWeek: "שני", events: [] },
                    { name: 'כט', dayOfWeek: "שלישי", events: [] },
                ]
            }, {
                name: 'כסלו',
                Days: [
                    { name: 'א', dayOfWeek: "שלישי", events: [] },
                    { name: 'ב', dayOfWeek: "רביעי", events: [] },
                    { name: 'ג', dayOfWeek: "חמישי", events: [] },
                    { name: 'ד', dayOfWeek: "שישי", events: [] },
                    { name: 'ה', dayOfWeek: "שבת", events: [] },
                    { name: 'ו', dayOfWeek: "ראשון", events: [] },
                    { name: 'ז', dayOfWeek: "שני", events: [] },
                    { name: 'ח', dayOfWeek: "שלישי", events: [] },
                    { name: 'ט', dayOfWeek: "רביעי", events: [] },
                    { name: 'י', dayOfWeek: "חמישי", events: [] },
                    { name: 'יא', dayOfWeek: "שישי", events: [] },
                    { name: 'יב', dayOfWeek: "שבת", events: [] },
                    { name: 'יג', dayOfWeek: "ראשון", events: [] },
                    { name: 'יד', dayOfWeek: "שני", events: [] },
                    { name: 'טו', dayOfWeek: "שלישי", events: [] },
                    { name: 'טז', dayOfWeek: "רביעי", events: [] },
                    { name: 'יז', dayOfWeek: "חמישי", events: [] },
                    { name: 'יח', dayOfWeek: "שישי", events: [] },
                    { name: 'יט', dayOfWeek: "שבת", events: [] },
                    { name: 'כ', dayOfWeek: "ראשון", events: [] },
                    { name: 'כא', dayOfWeek: "שני", events: [] },
                    { name: 'כב', dayOfWeek: "שלישי", events: [] },
                    { name: 'כג', dayOfWeek: "רביעי", events: [] },
                    { name: 'כד', dayOfWeek: "חמישי", events: [] },
                    { name: 'כה', dayOfWeek: "שישי", events: [{ type: '🕯️', text: 'חנוכה' }] },
                    { name: 'כו', dayOfWeek: "שבת", events: [{ type: '🕯️', text: 'חנוכה' }] },
                    { name: 'כז', dayOfWeek: "ראשון", events: [{ type: '🕯️', text: 'חנוכה' }] },
                    { name: 'כח', dayOfWeek: "שני", events: [{ type: '🕯️', text: 'חנוכה' }] },
                    { name: 'כט', dayOfWeek: "שלישי", events: [{ type: '🕯️', text: 'חנוכה' }] },
                    { name: 'ל', dayOfWeek: "רביעי", events: [{ type: '🕯️', text: 'חנוכה' }] },
                ]
            },


            {
                name: 'טבת',
                Days: [
                    { name: 'א', dayOfWeek: "חמישי", events: [{ type: '🕯️', text: 'חנוכה' }] },
                    { name: 'ב', dayOfWeek: "שישי", events: [{ type: '🕯️', text: 'חנוכה' }] },
                    { name: 'ג', dayOfWeek: "רביעי", events: [] },
                    { name: 'ד', dayOfWeek: "חמישי", events: [] },
                    { name: 'ה', dayOfWeek: "שישי", events: [] },
                    { name: 'ו', dayOfWeek: "שבת", events: [] },
                    { name: 'ז', dayOfWeek: "ראשון", events: [] },
                    { name: 'ח', dayOfWeek: "שני", events: [] },
                    { name: 'ט', dayOfWeek: "שלישי", events: [] },
                    { name: 'י', dayOfWeek: "רביעי", events: [{ type: '❎', text: 'צום עשרה בטבת' }] },
                    { name: 'יא', dayOfWeek: "חמישי", events: [] },
                    { name: 'יב', dayOfWeek: "שישי", events: [] },
                    { name: 'יג', dayOfWeek: "רביעי", events: [] },
                    { name: 'יד', dayOfWeek: "חמישי", events: [] },
                    { name: 'טו', dayOfWeek: "שישי", events: [] },
                    { name: 'טז', dayOfWeek: "שבת", events: [] },
                    { name: 'יז', dayOfWeek: "ראשון", events: [] },
                    { name: 'יח', dayOfWeek: "שני", events: [] },
                    { name: 'יט', dayOfWeek: "שלישי", events: [] },
                    { name: 'כ', dayOfWeek: "רביעי", events: [] },
                    { name: 'כא', dayOfWeek: "חמישי", events: [] },
                    { name: 'כב', dayOfWeek: "שישי", events: [] },
                    { name: 'כג', dayOfWeek: "רביעי", events: [] },
                    { name: 'כד', dayOfWeek: "חמישי", events: [] },
                    { name: 'כה', dayOfWeek: "שישי", events: [] },
                    { name: 'כו', dayOfWeek: "שבת", events: [] },
                    { name: 'כז', dayOfWeek: "ראשון", events: [] },
                    { name: 'כח', dayOfWeek: "שני", events: [] },
                    { name: 'כט', dayOfWeek: "שלישי", events: [] },
                ]
            }, {
                name: 'שבט',
                Days: [
                    { name: 'א', dayOfWeek: "שלישי", events: [] },
                    { name: 'ב', dayOfWeek: "רביעי", events: [] },
                    { name: 'ג', dayOfWeek: "חמישי", events: [] },
                    { name: 'ד', dayOfWeek: "שישי", events: [] },
                    { name: 'ה', dayOfWeek: "שבת", events: [] },
                    { name: 'ו', dayOfWeek: "ראשון", events: [] },
                    { name: 'ז', dayOfWeek: "שני", events: [] },
                    { name: 'ח', dayOfWeek: "שלישי", events: [] },
                    { name: 'ט', dayOfWeek: "רביעי", events: [] },
                    { name: 'י', dayOfWeek: "חמישי", events: [] },
                    { name: 'יא', dayOfWeek: "שישי", events: [] },
                    { name: 'יב', dayOfWeek: "שבת", events: [] },
                    { name: 'יג', dayOfWeek: "ראשון", events: [] },
                    { name: 'יד', dayOfWeek: "שני", events: [] },
                    { name: 'טו', dayOfWeek: "שלישי", events: [{ type: '🍇', text: 'טו בשבט' }] },
                    { name: 'טז', dayOfWeek: "רביעי", events: [] },
                    { name: 'יז', dayOfWeek: "חמישי", events: [] },
                    { name: 'יח', dayOfWeek: "שישי", events: [] },
                    { name: 'יט', dayOfWeek: "שבת", events: [] },
                    { name: 'כ', dayOfWeek: "ראשון", events: [] },
                    { name: 'כא', dayOfWeek: "שני", events: [] },
                    { name: 'כב', dayOfWeek: "שלישי", events: [] },
                    { name: 'כג', dayOfWeek: "רביעי", events: [] },
                    { name: 'כד', dayOfWeek: "חמישי", events: [] },
                    { name: 'כה', dayOfWeek: "שישי", events: [] },
                    { name: 'כו', dayOfWeek: "שבת", events: [] },
                    { name: 'כז', dayOfWeek: "ראשון", events: [] },
                    { name: 'כח', dayOfWeek: "שני", events: [] },
                    { name: 'כט', dayOfWeek: "שלישי", events: [] },
                    { name: 'ל', dayOfWeek: "רביעי", events: [] },
                ]
            },


            {
                name: 'אדר',
                Days: [
                    { name: 'א', dayOfWeek: "חמישי", events: [] },
                    { name: 'ב', dayOfWeek: "שישי", events: [] },
                    { name: 'ג', dayOfWeek: "רביעי", events: [] },
                    { name: 'ד', dayOfWeek: "חמישי", events: [] },
                    { name: 'ה', dayOfWeek: "שישי", events: [] },
                    { name: 'ו', dayOfWeek: "שבת", events: [] },
                    { name: 'ז', dayOfWeek: "ראשון", events: [] },
                    { name: 'ח', dayOfWeek: "שני", events: [] },
                    { name: 'ט', dayOfWeek: "שלישי", events: [] },
                    { name: 'י', dayOfWeek: "רביעי", events: [] },
                    { name: 'יא', dayOfWeek: "חמישי", events: [] },
                    { name: 'יב', dayOfWeek: "שישי", events: [] },
                    { name: 'יג', dayOfWeek: "רביעי", events: [{ type: '🤡', text: 'פורים דפרזים' }] },
                    { name: 'יד', dayOfWeek: "חמישי", events: [{ type: '🤡', text: 'פורים דמוקפים' }] },
                    { name: 'טו', dayOfWeek: "שישי", events: [] },
                    { name: 'טז', dayOfWeek: "שבת", events: [] },
                    { name: 'יז', dayOfWeek: "ראשון", events: [] },
                    { name: 'יח', dayOfWeek: "שני", events: [] },
                    { name: 'יט', dayOfWeek: "שלישי", events: [] },
                    { name: 'כ', dayOfWeek: "רביעי", events: [] },
                    { name: 'כא', dayOfWeek: "חמישי", events: [] },
                    { name: 'כב', dayOfWeek: "שישי", events: [] },
                    { name: 'כג', dayOfWeek: "רביעי", events: [] },
                    { name: 'כד', dayOfWeek: "חמישי", events: [] },
                    { name: 'כה', dayOfWeek: "שישי", events: [] },
                    { name: 'כו', dayOfWeek: "שבת", events: [] },
                    { name: 'כז', dayOfWeek: "ראשון", events: [] },
                    { name: 'כח', dayOfWeek: "שני", events: [] },
                    { name: 'כט', dayOfWeek: "שלישי", events: [] },
                ]
            }, {
                name: 'ניסן',
                Days: [
                    { name: 'א', dayOfWeek: "שלישי", events: [] },
                    { name: 'ב', dayOfWeek: "רביעי", events: [] },
                    { name: 'ג', dayOfWeek: "חמישי", events: [] },
                    { name: 'ד', dayOfWeek: "שישי", events: [] },
                    { name: 'ה', dayOfWeek: "שבת", events: [] },
                    { name: 'ו', dayOfWeek: "ראשון", events: [] },
                    { name: 'ז', dayOfWeek: "שני", events: [] },
                    { name: 'ח', dayOfWeek: "שלישי", events: [] },
                    { name: 'ט', dayOfWeek: "רביעי", events: [] },
                    { name: 'י', dayOfWeek: "חמישי", events: [] },
                    { name: 'יא', dayOfWeek: "שישי", events: [] },
                    { name: 'יב', dayOfWeek: "שבת", events: [] },
                    { name: 'יג', dayOfWeek: "ראשון", events: [] },
                    { name: 'יד', dayOfWeek: "שני", events: [] },
                    { name: 'טו', dayOfWeek: "שלישי", events: [{ type: '🥬', text: 'יום טוב פסח' }] },
                    { name: 'טז', dayOfWeek: "רביעי", events: [{ type: '🥬', text: 'א דחול המועד' }] },
                    { name: 'יז', dayOfWeek: "חמישי", events: [{ type: '🥬', text: 'ב דחול המועד' }] },
                    { name: 'יח', dayOfWeek: "שישי", events: [{ type: '🥬', text: 'ג דחול המועד' }] },
                    { name: 'יט', dayOfWeek: "שבת", events: [{ type: '🥬', text: 'ד דחול המועד' }] },
                    { name: 'כ', dayOfWeek: "ראשון", events: [{ type: '🥬', text: 'ה דחול המועד' }] },
                    { name: 'כא', dayOfWeek: "שני", events: [{ type: '🥬', text: 'שביעי של פסח' }] },
                    { name: 'כב', dayOfWeek: "שלישי", events: [] },
                    { name: 'כג', dayOfWeek: "רביעי", events: [] },
                    { name: 'כד', dayOfWeek: "חמישי", events: [] },
                    { name: 'כה', dayOfWeek: "שישי", events: [] },
                    { name: 'כו', dayOfWeek: "שבת", events: [] },
                    { name: 'כז', dayOfWeek: "ראשון", events: [] },
                    { name: 'כח', dayOfWeek: "שני", events: [] },
                    { name: 'כט', dayOfWeek: "שלישי", events: [] },
                    { name: 'ל', dayOfWeek: "רביעי", events: [] },
                ]
            },


            {
                name: 'אייר',
                Days: [
                    { name: 'א', dayOfWeek: "חמישי", events: [] },
                    { name: 'ב', dayOfWeek: "שישי", events: [] },
                    { name: 'ג', dayOfWeek: "רביעי", events: [] },
                    { name: 'ד', dayOfWeek: "חמישי", events: [] },
                    { name: 'ה', dayOfWeek: "שישי", events: [] },
                    { name: 'ו', dayOfWeek: "שבת", events: [] },
                    { name: 'ז', dayOfWeek: "ראשון", events: [] },
                    { name: 'ח', dayOfWeek: "שני", events: [] },
                    { name: 'ט', dayOfWeek: "שלישי", events: [] },
                    { name: 'י', dayOfWeek: "רביעי", events: [] },
                    { name: 'יא', dayOfWeek: "חמישי", events: [] },
                    { name: 'יב', dayOfWeek: "שישי", events: [] },
                    { name: 'יג', dayOfWeek: "רביעי", events: [] },
                    { name: 'יד', dayOfWeek: "חמישי", events: [] },
                    { name: 'טו', dayOfWeek: "שישי", events: [] },
                    { name: 'טז', dayOfWeek: "שבת", events: [] },
                    { name: 'יז', dayOfWeek: "ראשון", events: [] },
                    { name: 'יח', dayOfWeek: "שני", events: [{ type: '🔥', text: 'לג בעומר' }] },
                    { name: 'יט', dayOfWeek: "שלישי", events: [] },
                    { name: 'כ', dayOfWeek: "רביעי", events: [] },
                    { name: 'כא', dayOfWeek: "חמישי", events: [] },
                    { name: 'כב', dayOfWeek: "שישי", events: [] },
                    { name: 'כג', dayOfWeek: "רביעי", events: [] },
                    { name: 'כד', dayOfWeek: "חמישי", events: [] },
                    { name: 'כה', dayOfWeek: "שישי", events: [] },
                    { name: 'כו', dayOfWeek: "שבת", events: [] },
                    { name: 'כז', dayOfWeek: "ראשון", events: [] },
                    { name: 'כח', dayOfWeek: "שני", events: [] },
                    { name: 'כט', dayOfWeek: "שלישי", events: [] },
                ]
            }, {
                name: 'סיוון',
                Days: [
                    { name: 'א', dayOfWeek: "שלישי", events: [] },
                    { name: 'ב', dayOfWeek: "רביעי", events: [] },
                    { name: 'ג', dayOfWeek: "חמישי", events: [] },
                    { name: 'ד', dayOfWeek: "שישי", events: [] },
                    { name: 'ה', dayOfWeek: "שבת", events: [] },
                    { name: 'ו', dayOfWeek: "ראשון", events: [{ type: '📖', text: 'יום טוב שבועות' }] },
                    { name: 'ז', dayOfWeek: "שני", events: [] },
                    { name: 'ח', dayOfWeek: "שלישי", events: [] },
                    { name: 'ט', dayOfWeek: "רביעי", events: [] },
                    { name: 'י', dayOfWeek: "חמישי", events: [] },
                    { name: 'יא', dayOfWeek: "שישי", events: [] },
                    { name: 'יב', dayOfWeek: "שבת", events: [] },
                    { name: 'יג', dayOfWeek: "ראשון", events: [] },
                    { name: 'יד', dayOfWeek: "שני", events: [] },
                    { name: 'טו', dayOfWeek: "שלישי", events: [] },
                    { name: 'טז', dayOfWeek: "רביעי", events: [] },
                    { name: 'יז', dayOfWeek: "חמישי", events: [] },
                    { name: 'יח', dayOfWeek: "שישי", events: [] },
                    { name: 'יט', dayOfWeek: "שבת", events: [] },
                    { name: 'כ', dayOfWeek: "ראשון", events: [] },
                    { name: 'כא', dayOfWeek: "שני", events: [] },
                    { name: 'כב', dayOfWeek: "שלישי", events: [] },
                    { name: 'כג', dayOfWeek: "רביעי", events: [] },
                    { name: 'כד', dayOfWeek: "חמישי", events: [] },
                    { name: 'כה', dayOfWeek: "שישי", events: [] },
                    { name: 'כו', dayOfWeek: "שבת", events: [] },
                    { name: 'כז', dayOfWeek: "ראשון", events: [] },
                    { name: 'כח', dayOfWeek: "שני", events: [] },
                    { name: 'כט', dayOfWeek: "שלישי", events: [] },
                    { name: 'ל', dayOfWeek: "רביעי", events: [] },
                ]
            },


            {
                name: 'תמוז',
                Days: [
                    { name: 'א', dayOfWeek: "חמישי", events: [] },
                    { name: 'ב', dayOfWeek: "שישי", events: [] },
                    { name: 'ג', dayOfWeek: "רביעי", events: [] },
                    { name: 'ד', dayOfWeek: "חמישי", events: [] },
                    { name: 'ה', dayOfWeek: "שישי", events: [] },
                    { name: 'ו', dayOfWeek: "שבת", events: [] },
                    { name: 'ז', dayOfWeek: "ראשון", events: [] },
                    { name: 'ח', dayOfWeek: "שני", events: [] },
                    { name: 'ט', dayOfWeek: "שלישי", events: [] },
                    { name: 'י', dayOfWeek: "רביעי", events: [] },
                    { name: 'יא', dayOfWeek: "חמישי", events: [] },
                    { name: 'יב', dayOfWeek: "שישי", events: [] },
                    { name: 'יג', dayOfWeek: "רביעי", events: [] },
                    { name: 'יד', dayOfWeek: "חמישי", events: [] },
                    { name: 'טו', dayOfWeek: "שישי", events: [] },
                    { name: 'טז', dayOfWeek: "שבת", events: [] },
                    { name: 'יז', dayOfWeek: "ראשון", events: [{ type: '❎', text: 'צום שבעה עשר בתמוז' }] },
                    { name: 'יח', dayOfWeek: "שני", events: [] },
                    { name: 'יט', dayOfWeek: "שלישי", events: [] },
                    { name: 'כ', dayOfWeek: "רביעי", events: [] },
                    { name: 'כא', dayOfWeek: "חמישי", events: [] },
                    { name: 'כב', dayOfWeek: "שישי", events: [] },
                    { name: 'כג', dayOfWeek: "רביעי", events: [] },
                    { name: 'כד', dayOfWeek: "חמישי", events: [] },
                    { name: 'כה', dayOfWeek: "שישי", events: [] },
                    { name: 'כו', dayOfWeek: "שבת", events: [] },
                    { name: 'כז', dayOfWeek: "ראשון", events: [] },
                    { name: 'כח', dayOfWeek: "שני", events: [] },
                    { name: 'כט', dayOfWeek: "שלישי", events: [] },
                ]
            },
            {
                name: 'אב',
                Days: [
                    { name: 'א', dayOfWeek: "שלישי", events: [] },
                    { name: 'ב', dayOfWeek: "רביעי", events: [] },
                    { name: 'ג', dayOfWeek: "חמישי", events: [] },
                    { name: 'ד', dayOfWeek: "שישי", events: [] },
                    { name: 'ה', dayOfWeek: "שבת", events: [] },
                    { name: 'ו', dayOfWeek: "ראשון", events: [] },
                    { name: 'ז', dayOfWeek: "שני", events: [] },
                    { name: 'ח', dayOfWeek: "שלישי", events: [] },
                    { name: 'ט', dayOfWeek: "רביעי", events: [{ type: '❎', text: 'צום תשעה באב' }] },
                    { name: 'י', dayOfWeek: "חמישי", events: [] },
                    { name: 'יא', dayOfWeek: "שישי", events: [] },
                    { name: 'יב', dayOfWeek: "שבת", events: [] },
                    { name: 'יג', dayOfWeek: "ראשון", events: [] },
                    { name: 'יד', dayOfWeek: "שני", events: [] },
                    { name: 'טו', dayOfWeek: "שלישי", events: [] },
                    { name: 'טז', dayOfWeek: "רביעי", events: [] },
                    { name: 'יז', dayOfWeek: "חמישי", events: [] },
                    { name: 'יח', dayOfWeek: "שישי", events: [] },
                    { name: 'יט', dayOfWeek: "שבת", events: [] },
                    { name: 'כ', dayOfWeek: "ראשון", events: [] },
                    { name: 'כא', dayOfWeek: "שני", events: [] },
                    { name: 'כב', dayOfWeek: "שלישי", events: [] },
                    { name: 'כג', dayOfWeek: "רביעי", events: [] },
                    { name: 'כד', dayOfWeek: "חמישי", events: [] },
                    { name: 'כה', dayOfWeek: "שישי", events: [] },
                    { name: 'כו', dayOfWeek: "שבת", events: [] },
                    { name: 'כז', dayOfWeek: "ראשון", events: [] },
                    { name: 'כח', dayOfWeek: "שני", events: [] },
                    { name: 'כט', dayOfWeek: "שלישי", events: [] },
                    { name: 'ל', dayOfWeek: "רביעי", events: [] },
                ]
            },

            {
                name: 'אלול',
                Days: [
                    { name: 'א', dayOfWeek: "חמישי", events: [] },
                    { name: 'ב', dayOfWeek: "שישי", events: [] },
                    { name: 'ג', dayOfWeek: "רביעי", events: [] },
                    { name: 'ד', dayOfWeek: "חמישי", events: [] },
                    { name: 'ה', dayOfWeek: "שישי", events: [] },
                    { name: 'ו', dayOfWeek: "שבת", events: [] },
                    { name: 'ז', dayOfWeek: "ראשון", events: [] },
                    { name: 'ח', dayOfWeek: "שני", events: [] },
                    { name: 'ט', dayOfWeek: "שלישי", events: [] },
                    { name: 'י', dayOfWeek: "רביעי", events: [] },
                    { name: 'יא', dayOfWeek: "חמישי", events: [] },
                    { name: 'יב', dayOfWeek: "שישי", events: [] },
                    { name: 'יג', dayOfWeek: "רביעי", events: [] },
                    { name: 'יד', dayOfWeek: "חמישי", events: [] },
                    { name: 'טו', dayOfWeek: "שישי", events: [] },
                    { name: 'טז', dayOfWeek: "שבת", events: [] },
                    { name: 'יז', dayOfWeek: "ראשון", events: [] },
                    { name: 'יח', dayOfWeek: "שני", events: [] },
                    { name: 'יט', dayOfWeek: "שלישי", events: [] },
                    { name: 'כ', dayOfWeek: "רביעי", events: [] },
                    { name: 'כא', dayOfWeek: "חמישי", events: [] },
                    { name: 'כב', dayOfWeek: "שישי", events: [] },
                    { name: 'כג', dayOfWeek: "רביעי", events: [] },
                    { name: 'כד', dayOfWeek: "חמישי", events: [] },
                    { name: 'כה', dayOfWeek: "שישי", events: [] },
                    { name: 'כו', dayOfWeek: "שבת", events: [] },
                    { name: 'כז', dayOfWeek: "ראשון", events: [] },
                    { name: 'כח', dayOfWeek: "שני", events: [] },
                    { name: 'כט', dayOfWeek: "שלישי", events: [] },
                ]
            },
        ]
    });

    // אתחול לוח בסיסי ב-localStorage
    useEffect(() => {
        const arr = localStorage.getItem("basic");
        if (!arr) {
            const originalCalendar = {
                Name: "BasicCalender",
                Months: BasicCalender.Months,
                Color: color,
                BackGroundColor: backGroundColor
            };
            localStorage.setItem("basic", JSON.stringify(originalCalendar));
        }
    }, []);

    const Update = () => { //עדכון והוספת לוח שנה
        const arr =[];
        const x = []
        if(arr) {
            x.push(localStorage.getItem("basic"));
        } else {
            x =[];
        }

        // בדיקה אם כבר קיים לוח עם אותו שם
        const exists = x.some(cal => cal.Name === name);
        if (!exists && name) { //אם אין לוח עם אותו שם והוכנס שם
            const newCalendar = { //יצירת לוח חדש
                Name: name,
                Months: JSON.parse(JSON.stringify(BasicCalender.Months)),
                Color: color,
                BackGroundColor: backGroundColor
            };

            x.push(newCalendar); //הוספה למערך
            localStorage.setItem("basic", JSON.stringify(x)); //שמירת המערך המעודכן
            setRefresh(prev => prev + 1);
        }
    };

    const ChangeClick = () => {
        Update();
        setShowDynamicStyle(true);
        setCounter(prev => prev + 1);
    };

    // שמירת counter ב-localStorage
    useEffect(() => {
        localStorage.setItem("counter", String(counter));
    }, [counter]);

    return (
        <>
            <button //כפתור לשינוי לוח שנה
                style={{ backgroundColor: "pink", color: "red" }}
                onClick={ChangeClick}
            >
                Change
            </button>

            {showDynamicStyle && (
                <>

                    <DynamicStyle setColor={setColor} setBackGroundColor={setBackGroundColor} />
                    <AddEvent setBasicCalender={setBasicCalender} BasicCalender={BasicCalender} name={name} />
                    <Login setName={setName} />
                    <Act name={name} />
                    <ChooseCallender
                        setColor={setColor}
                        setBackGroundColor={setBackGroundColor}
                        color={color}
                        backGroundColor={backGroundColor}
                        refresh={refresh}
                    />
                </>
            )}

            <ChooseCallender
                setColor={setColor}
                setBackGroundColor={setBackGroundColor}
                color={color}
                backGroundColor={backGroundColor}
                refresh={refresh}
            />

            <Year
                color={color}
                backGroundColor={backGroundColor}
                BasicCalender={BasicCalender}
            />
        </>
    );
};





