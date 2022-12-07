import { useState,  React} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isToday,
    parse,
    parseISO,
    startOfToday,
} from 'date-fns'
import "./Calendar.css"
import vi from 'date-fns/locale/vi';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const meetings = [
    {
      id: 1,
      name: 'Leslie Alexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-12-13T14:00',
      endDatetime: '2022-12-13T14:30',
    },
    {
      id: 2,
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-12-13T14:00',
      endDatetime: '2022-12-13T14:30',
    },
    {
      id: 3,
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-12-13T14:00',
      endDatetime: '2022-12-13T14:30',
    },
    {
      id: 4,
      name: 'Leslie Alexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-12-13T14:00',
      endDatetime: '2022-12-13T14:30',
    },
    {
      id: 5,
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-12-13T14:00',
      endDatetime: '2022-12-13T14:30',
    },
    {
      id: 6,
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-12-13T14:00',
      endDatetime: '2022-12-13T14:30',
    },
    {
      id: 7,
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-12-13T14:00',
      endDatetime: '2022-12-13T14:30',
    },
    {
      id: 8,
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-12-13T14:00',
      endDatetime: '2022-12-13T14:30',
    },
    {
      id: 9,
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-12-13T14:00',
      endDatetime: '2022-12-13T14:30',
    },
    {
      id: 10,
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      startDatetime: '2022-12-13T14:00',
      endDatetime: '2022-12-13T14:30',
    },
  ]

export default function MiniCalendar() {
    let today = startOfToday()
    const [selectedDay, setSelectedDay] = useState(today)
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    })

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    let selectedDayMeetings = meetings.filter((meeting) =>
        isSameDay(parseISO(meeting.startDatetime), selectedDay)
    )

    return (
        <div className="CalendarPageMini">
            <div className="CalendarFrameMini">
                <div className="CalendarHeader">
                    <h4 className="CalendarHeaderTitleMini">
                        {
                            format(firstDayCurrentMonth, 'MMMM yyyy', { locale: vi })
                        }
                    </h4>
                    <button
                        type="button"
                        onClick={previousMonth}
                        className="CalendarHeaderPreviousButton"
                    >
                        <ChevronLeftIcon className="ButtonIconMini" aria-hidden="true" />
                    </button>
                    <button
                        onClick={nextMonth}
                        type="button"
                        className="CalendarHeaderNextButton"
                    >
                        <ChevronRightIcon className="ButtonIconMini" aria-hidden="true" />
                    </button>
                </div>
                <div className="CalendarDayMini">
                    <div>CN</div>
                    <div>T2</div>
                    <div>T3</div>
                    <div>T4</div>
                    <div>T5</div>
                    <div>T6</div>
                    <div>T7</div>
                </div>
                <div className="CalendarMini">
                    {days.map((day, dayIdx) => (
                        <div
                            key={day.toString()}
                            className={classNames(
                                dayIdx === 0 && colStartClasses[getDay(day)],
                                "ColMini"
                            )}
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedDay(day)}
                                className={classNames(
                                    isEqual(day, selectedDay) &&
                                    !isToday(day) && "ChosenNotTodayMini",
                                    isEqual(day, selectedDay) &&
                                    isToday(day) && "ChosenTodayMini",
                                    !isEqual(day, selectedDay) &&
                                    !isToday(day) && "NotChosenNotTodayMini",
                                    !isEqual(day, selectedDay) &&
                                    isToday(day) && "NotChosenTodayMini",
                                )}
                            >
                                <time className="DayFormat" dateTime={format(day, 'yyyy-MM-dd')}>
                                    {format(day, 'd')}
                                </time>
                            </button>

                            <div className="MeetingIndicatorFieldMini">
                                {meetings.some((meeting) =>
                                    isSameDay(parseISO(meeting.startDatetime), day)
                                ) && (
                                        <div className="MeetingIndicatorMini"></div>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const colStartClasses = [
    "ColStart1Mini",
    "ColStart2Mini",
    "ColStart3Mini",
    "ColStart4Mini",
    "ColStart5Mini",
    "ColStart6Mini",
    "ColStart7Mini",
  ]
  