import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Aniket Ghadge",
    text: "Lorem Ipsum is simply dummy text of the printing",
    replies: [
      {
        name: "Aniket Ghadge",
        text: "Lorem Ipsum is simply dummy text of the printing",
        replies: [
          {
            name: "Aniket Ghadge",
            text: "Lorem Ipsum is simply dummy text of the printing",
            replies: [
              {
                name: "Aniket Ghadge",
                text: "Lorem Ipsum is simply dummy text of the printing",
                replies: [
                  {
                    name: "Aniket Ghadge",
                    text: "Lorem Ipsum is simply dummy text of the printing",
                    replies: [
                      {
                        name: "Aniket Ghadge",
                        text: "Lorem Ipsum is simply dummy text of the printing",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Aniket Ghadge",
                text: "Lorem Ipsum is simply dummy text of the printing",
                replies: [],
              },
            ],
          },
          {
            name: "Aniket Ghadge",
            text: "Lorem Ipsum is simply dummy text of the printing",
            replies: [],
          },
        ],
      },
      {
        name: "Aniket Ghadge",
        text: "Lorem Ipsum is simply dummy text of the printing",
        replies: [],
      },
      {
        name: "Aniket Ghadge",
        text: "Lorem Ipsum is simply dummy text of the printing",
        replies: [],
      },
      {
        name: "Aniket Ghadge",
        text: "Lorem Ipsum is simply dummy text of the printing",
        replies: [],
      },
      {
        name: "Aniket Ghadge",
        text: "Lorem Ipsum is simply dummy text of the printing",
        replies: [],
      },
    ],
  },
  {
    name: "Aniket Ghadge",
    text: "Lorem Ipsum is simply dummy text of the printing",
    replies: [],
  },
  {
    name: "Aniket Ghadge",
    text: "Lorem Ipsum is simply dummy text of the printing",
    replies: [],
  },
  {
    name: "Aniket Ghadge",
    text: "Lorem Ipsum is simply dummy text of the printing",
    replies: [],
  },
  {
    name: "Aniket Ghadge",
    text: "Lorem Ipsum is simply dummy text of the printing",
    replies: [],
  },
  {
    name: "Aniket Ghadge",
    text: "Lorem Ipsum is simply dummy text of the printing",
    replies: [],
  },
  {
    name: "Aniket Ghadge",
    text: "Lorem Ipsum is simply dummy text of the printing",
    replies: [],
  },
  {
    name: "Aniket Ghadge",
    text: "Lorem Ipsum is simply dummy text of the printing",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-5">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
