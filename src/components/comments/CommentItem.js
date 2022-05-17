import classes from './CommentItem.module.css'

const CommentItem = (props) => {
  console.log('Welome to Commmit')
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  )
}

export default CommentItem
