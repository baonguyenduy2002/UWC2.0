import React from "react";
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon, PlusIcon } from '@heroicons/react/outline'
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
import { Fragment, useState } from 'react'
import "./Calendar.css"
import AddDialogs from "./Dialog";
import vi from 'date-fns/locale/vi';
import AddTaskForm from "./AddTaskForm";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TaskCalendar() {
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
  const [openAddPopup, setOpenAddPopup] = React.useState(false);
  const handleOpenAddPopup = () => {
    setOpenAddPopup(true);
  };

  return (
    <div className="CalendarPage">
      <div className="CalendarScheduleFrame">
        <div className="CalendarScheduleGrid">
          <div className="CalendarFrame">
            <div className="CalendarHeader">
              <h2 className="CalendarHeaderTitle">
                {
                  format(firstDayCurrentMonth, 'MMMM yyyy', { locale: vi })
                }
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="CalendarHeaderPreviousButton"
              >
                <ChevronLeftIcon className="ButtonIcon" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="CalendarHeaderNextButton"
              >
                <ChevronRightIcon className="ButtonIcon" aria-hidden="true" />
              </button>
            </div>
            <div className="CalendarDay">
              <div className="CalendarDayProperties">CN</div>
              <div className="CalendarDayProperties">T2</div>
              <div className="CalendarDayProperties">T3</div>
              <div className="CalendarDayProperties">T4</div>
              <div className="CalendarDayProperties">T5</div>
              <div className="CalendarDayProperties">T6</div>
              <div className="CalendarDayProperties">T7</div>
            </div>
            <div className="Calendar">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "Col"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) &&
                      !isToday(day) && "ChosenNotToday",
                      isEqual(day, selectedDay) &&
                      isToday(day) && "ChosenToday",
                      !isEqual(day, selectedDay) &&
                      !isToday(day) && "NotChosenNotToday",
                      !isEqual(day, selectedDay) &&
                      isToday(day) && "NotChosenToday",
                    )}
                  >
                    <time className="DayFormat" dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>

                  <div className="MeetingIndicatorField">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                        <div className="MeetingIndicator"></div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="ScheduleFrame">
            <div className="ScheduleHeaderField">
              <h2 className="ScheduleHeader">
                Danh sách công việc ngày{' '}
                <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                  {format(selectedDay, 'dd, MMM, yyy', { locale: vi })}
                </time>
              </h2>
              <button
                type="button"
                className="AddTaskButton"
                onClick={handleOpenAddPopup}
              >
                <PlusIcon className="ButtonIcon" aria-hidden="true" />
              </button>
            </div>
            <ol className="TaskList">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p>Hôm nay không có công việc.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
      <AddDialogs title="Tạo công việc mới" openAddPopup={openAddPopup} setOpenAddPopup={setOpenAddPopup} >
        <span style={{ marginLeft: 100, paddingBottom: 25 }}>
          <AddTaskForm 
            type = "add"
            dialogState={openAddPopup} 
            setDialogState={setOpenAddPopup} 
          />
        </span>
      </AddDialogs>
    </div>
  )
}

function Meeting({ meeting }) {
  let startDateTime = parseISO(meeting.startDatetime)
  let endDateTime = parseISO(meeting.endDatetime)
  const [openAddPopup, setOpenAddPopup] = React.useState(false);
  const handleOpenAddPopup = () => {
    setOpenAddPopup(true);
  };
  return (
    <li className="Task">
      <div className="EmployeeInfoField">
        <img
          src={meeting.imageUrl}
          alt=""
          className="EmployeeAvatar"
        />
        <p className="EmployeeName">{meeting.name}</p>
      </div>
      <div className="TaskTag">
        <p className="TaskInformation">testing</p>
        <p className="TaskInformation">testing</p>
        <p className="TaskInformation">testing</p>
        <p className="TaskInformation">testing</p>
        <p className="TaskInformation">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, 'h:mm a')}
          </time>{' '}
          -{' '}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, 'h:mm a')}
          </time>
        </p>
      </div>
      <Menu
        as="div"
        className="Menu"
      >
        <div>
          <Menu.Button
            className="MenuButton"
          >
            <DotsVerticalIcon className="ButtonIcon" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="TransitionEnter"
          enterFrom="TransitionEnterFrom"
          enterTo="TransitionEnterTo"
          leave="TransitionLeave"
          leaveFrom="TransitionLeaveFrom"
          leaveTo="TransitionLeaveTo"
        >
          <Menu.Items className="MenuField">
            <div className="MenuBox">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleOpenAddPopup}
                    className={
                      active ? "MenuItemActive" : "MenuItem"
                    }
                  >
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button

                    className={
                      active ? "MenuItemActive" : "MenuItem"
                    }
                  >
                    Remove
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <AddDialogs title="Chỉnh sửa công việc" openAddPopup={openAddPopup} setOpenAddPopup={setOpenAddPopup}>
        <span style={{ marginLeft: 100, paddingBottom: 25 }}>
          <AddTaskForm 
            dialogState={openAddPopup} 
            setDialogState={setOpenAddPopup}
            type = 'edit'
          />
        </span>
      </AddDialogs>
    </li>
  )
}

const colStartClasses = [
  "ColStart1",
  "ColStart2",
  "ColStart3",
  "ColStart4",
  "ColStart5",
  "ColStart6",
  "ColStart7",
]
