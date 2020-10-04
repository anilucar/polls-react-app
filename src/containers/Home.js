import React, { Component, Fragment } from "react";
import QuestionCard from "../components/QuestionsCard/QuestionCard";
import QuestionDetail from "../components/QuestionsCard/QuestionDetail";
import axios from "axios";
import Question from "../utils/Question";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      selectedQuestion: null,
      showDetail: false,
    };
  }

  fetchQuestions() {
    return axios.get("https://polls.apiblueprint.org/questions");
  }

  componentDidMount() {
    this.fetchQuestions()
      .then((response) => {
        const { data } = response;
        this.setState({
          questions: Question.createModelInstances(data),
        });
      })
      .catch((e) => console.log(e));
  }

  onQuestionClick(e, selectedQuestion) {
    this.setState({
      selectedQuestion,
      showDetail: true,
    });
  }

  resetActiveQuestion() {
    this.setState({
      selectedQuestion: null,
      showDetail: false,
    });
  }

  render() {
    return (
      <Fragment>
        {!this.state.showDetail ? (
          <>
            <div className="container">
              <h5 className="card-title text-center">Questions</h5>
              {this.state.questions.map((question) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  onQuestionClick={this.onQuestionClick.bind(this)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <QuestionDetail
              key={this.state.selectedQuestion.id}
              question={this.state.selectedQuestion}
              resetActiveQuestion={this.resetActiveQuestion.bind(this)}
            />
          </>
        )}
      </Fragment>
    );
  }
}
export default Home;
