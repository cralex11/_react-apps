//Import React and ReactDOM
import React from "react"
import ReactDOM from "react-dom"
import faker from "faker"

//components
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"

faker.locale = "ru"
//Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 5:00 PM"
          commentText="Nice blog bro"
          fakeImg={faker.image.cats()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo={faker.time.recent()}
          commentText={faker.lorem.sentence()}
          fakeImg={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Nick"
          timeAgo="Today at 6:30 PM"
          commentText="Nice blog"
          fakeImg={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="John"
          timeAgo="Today at 6:00 PM"
          commentText="Nice blog"
          fakeImg={faker.image.sports()}
        />
      </ApprovalCard>
    </div>
  )
}

//Take react component and show it om th screen
ReactDOM.render(<App />, document.getElementById("root"))
