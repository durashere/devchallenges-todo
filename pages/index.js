import { useState } from "react"
import Head from "next/head"
import Tabs from "../components/Tabs/Tabs"
import Form from "../components/Form/Form"
import List from "../components/List/List"

let initialTodos = [
  { done: true, content: "Do coding challenges" },
  { done: false, content: "Again do coding challenges" },
]

export default function Home() {
  const [active, setActive] = useState("All")
  const [todos, setTodos] = useState(initialTodos)

  return (
    <div className="flex flex-col h-screen w-11/12 mx-auto xl:w-5/12">
      <Head>
        <title>Simple Todo</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Raleway:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="py-4 text-center">
        <p className="font-rale font-bold text-4xl text-gray-c333333">#todo</p>
      </header>

      <main className="flex flex-col gap-4 flex-1">
        <Tabs active={active} setActive={setActive} />
        {active !== "Completed" && (
          <Form todos={todos} todos={todos} setTodos={setTodos} />
        )}
        <List active={active} todos={todos} setTodos={setTodos} />
      </main>

      <footer className="text-center">
        <p className="py-4 font-mont font-semibold text-sm text-gray-cA9A9A9">
          <a href="https://github.com/durashere">durashere</a> @{" "}
          <a href="https://devchallenges.io">DevChallenges.io</a>
        </p>
      </footer>
    </div>
  )
}
