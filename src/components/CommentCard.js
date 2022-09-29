// import { useSelector, useDispatch } from 'react-redux';
// import { useRef, useState, useEffect } from 'react';
// import { reload } from '../features/reloadSlice';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, Button, Input } from 'react-native';

export default function CommentCard({comment}) {
    // const newInput = useRef("")
    // const dispatch = useDispatch()
    // const user = useSelector(state => state.auth.user)
    // const commentId = comment._id

    // const [deleteComment] = useDeleteCommentMutation()
    // const [updateComment] = useUpdateCommentMutation()
    // const [open, setOpen] = useState(false)
    // const handleClick = () => { open ? setOpen(false) : setOpen(true) }

    // const handleDelete = async(e) => {
    //     e.preventDefault()
    //     await deleteComment(commentId)
    //     dispatch(reload())
    // }

    // const handleEdit = async(e) => {
    //     e.preventDefault()
    //     const objcomment = {
    //         id: commentId,
    //         comment: newInput.current.value,
    //         user: user?.id,
    //         itinerary: comment.itinerary._id
    //     }
    //     await updateComment(objcomment)
    //     dispatch(reload())
    //     setOpen(false)
    // }
    return (
        <>
            <View key={comment?._id} style={styles.commentContainer}>
                <View style={styles.userComment}>
                    <Image style={styles.image} source={comment?.user.photo} />
                    <Text style={styles.h2}>{comment?.user.name}</Text>
                </View>
                <Text style={styles.h3}>{comment?.comment}</Text>
                    {/* { open ?
                        <Form>
                            <TextInput type="text" name="comment" defaultValue={comment.comment} ref={newInput}/>
                            <Button className="edit-ok" onClick={handleEdit}></Button>
                        </Form>
                    :
                        <Text>{comment.comment}</Text>
                    } */}
                {/* <View className='comments-btns'>
                    { user && (user?.id === comment.user._id) &&
                        <View>
                            <Image src="/images/edit-icon.png" alt="edit" onClick={handleClick} />
                            <Image src="/images/x-mark.png" alt="del" onClick={handleDelete} />
                        </View>
                    }
                </View> */}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    commentContainer: {
        width: 300,
        backgroundColor: '#d7e7e3',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
        paddingTop: 5,
        marginBottom: 5
    },
    userComment: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100
    },
    h2: {
        color: '#000',
        fontSize: 16,
        fontWeight: '800'
    },
    h3: {
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        fontSize: 15,
        alignSelf: 'center',
    },
    image: {
        width: 30,
        height: 30,
        marginLeft: 2
    }
});
