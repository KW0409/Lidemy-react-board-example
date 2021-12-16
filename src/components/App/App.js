import styled from "styled-components";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";

// contariner
const Page = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: "monospace", "微軟正黑體";
  box-shadow: 0px 0px 16px rgb(199, 197, 197);
  border-radius: 8px;
  padding: 12px 28px;
  padding-bottom: 24px;
  color: #6c6c6c;
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-align: center;
`;

// 表單區塊 form
const MessageForm = styled.form`
  margin-top: 16px;
  font-size: 18px;
`;
const MessageLable = styled.div``;

const MessageTextArea = styled.textarea`
  display: block;
  margin-top: 8px;
  min-width: 95%;
  max-width: 100%;
  border-color: rgba(0, 0, 0, 0.125);
`;
const SubmitButton = styled.button`
  margin-top: 8px;
  color: #ddd;
  background-color: #343a40;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 16px;
  padding: 6px 12px;
`;

// 顯示留言區塊
const MessageList = styled.div`
  margin-top: 16px;
`;
const MessageContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 10px 16px;
  border-radius: 4px;
  & + & {
    margin-top: 16px;
  }
`;

const MessageHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

const MessageAuthor = styled.div`
  margin-right: 12px;
  color: #232323;
  font-size: 20px;
`;

const MessageTime = styled.div``;

const MessageBody = styled.div`
  margin-top: 8px;
  word-break: break-all;
  white-space: pre-line;
`;

const MessageDeleteButton = styled.button`
  margin-top: 8px;
  color: #fff;
  background-color: #da1f1f;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 14px;
  padding: 3px 6px;
  position: relative;
  right: -95%;
`;

const ErrorMessage = styled.div`
  margin-top: 16px;
  font-size: 20px;
  color: red;
`;

// Message Component: 可從傳入的參數去思考架構
function Message({ message, handleDeleteMessage }) {
  if (!message) return null;
  const handleDeleteClick = () => {
    handleDeleteMessage(message.id);
  };

  return (
    <MessageContainer data-id={message.id}>
      <MessageHead>
        <MessageAuthor>{message.nickname}</MessageAuthor>
        <MessageTime>
          {new Date(message.createdAt).toLocaleString()}
        </MessageTime>
      </MessageHead>
      <MessageBody>{message.body}</MessageBody>
      <MessageDeleteButton onClick={handleDeleteClick}>
        刪除
      </MessageDeleteButton>
    </MessageContainer>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number,
    nickname: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.number,
  }),
  handleDeleteMessage: PropTypes.func,
};

const MESSAGE_API = "https://student-json-api.lidemy.me/comments";

function App() {
  console.log("render");

  /* lazy initializer
  const [messages, setMessages] = useState(() => {
    console.log("fetch");
    fetch(`${MESSAGE_API}?_limit=10&_sort=createdAt&_order=desc`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("setData:", data);
        setMessages(data);
      })
      .catch((err) => {
        console.log("setError");
        setErrorMessage(err.toString());
      }));
  });
  const [errorMessage, setErrorMessage] = useState(null);
  */

  const [messages, setMessages] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const textAreaRef = useRef();

  const getMessageAPI = () => {
    console.log("fetch");
    return fetch(`${MESSAGE_API}?_limit=10&_sort=createdAt&_order=desc`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("setData:", data);
        setMessages(data);
      })
      .catch((err) => {
        console.log("setError");
        setErrorMessage(err.toString());
      });
  };

  useLayoutEffect(() => {
    getMessageAPI();
  }, []);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const content = textAreaRef.current.value;
    if (!content) {
      return alert(`錯誤：留言不可為空白`);
    }

    fetch(`${MESSAGE_API}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nickname: "Tequila",
        body: textAreaRef.current.value,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res);
        }
        return res.json();
      })
      .then((data) => {
        console.log("sendMessage success!");
        console.log("Resp Data:", data);
        if (data.ok === 0) {
          return alert(`錯誤：留言送出失敗！\nErr: ${data.message}`);
        }
        textAreaRef.current.value = "";
        getMessageAPI();
      })
      .catch((err) => {
        console.log(err);
        return alert(`錯誤：伺服器錯誤！\nErr: ${err.toString()}`);
      });
  };

  const handleDeleteMessage = (id) => {
    fetch(`${MESSAGE_API}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Message Delete!");
        console.log("Resp Data:", data);
        if (data.ok === 0) {
          return alert(`錯誤：留言刪除失敗！\nErr: ${data.message}`);
        }
        getMessageAPI();
      })
      .catch((err) => {
        return alert(`錯誤：伺服器錯誤！\nErr: ${err.toString()}`);
      });
  };

  return (
    <Page>
      <Title>React 留言板</Title>
      <MessageForm onSubmit={handleMessageSubmit}>
        <MessageLable>留言內容</MessageLable>
        <MessageTextArea ref={textAreaRef} rows={8} />
        <SubmitButton>送出</SubmitButton>
      </MessageForm>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {messages && messages.length === 0 && (
        <div style={{ marginTop: "16px" }}>目前還沒有人留言喔～</div>
      )}
      <MessageList>
        {messages &&
          messages.map((message) => {
            return (
              <Message
                key={message.id}
                message={message}
                handleDeleteMessage={handleDeleteMessage}
              />
            );
          })}
      </MessageList>
    </Page>
  );
}

export default App;
