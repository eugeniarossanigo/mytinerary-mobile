import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { reload } from '../redux/reloadSlice';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useDeleteCommentMutation } from '../redux/commentsAPI';

export default function CommentCard({comment}) {
    // const newInput = useRef("")
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const commentId = comment._id

    const [deleteComment] = useDeleteCommentMutation()
    // const [updateComment] = useUpdateCommentMutation()
    // const [open, setOpen] = useState(false)
    // const handleClick = () => { open ? setOpen(false) : setOpen(true) }

    const handleDelete = async(e) => {
        e.preventDefault()
        await deleteComment(commentId)
        dispatch(reload())
    }

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
                    <Image style={styles.image} source={{uri: comment?.user.photo}} />
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
                <View style={styles.commentsBtns} >
                    { user && (user?.id === comment.user._id) &&
                        <TouchableOpacity style={styles.btnMark} onPress={handleDelete}>
                            <Image style={styles.xMark} source={require('../../assets/x-mark.png')} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    commentContainer: {
        width: 330,
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
        width: 80
    },
    h2: {
        color: '#000',
        fontSize: 13,
        fontWeight: '800',
        paddingLeft: 6
    },
    h3: {
        backgroundColor: '#fff',
        width: 200,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 5,
        fontSize: 15,
        alignSelf: 'center',
    },
    image: {
        width: 24,
        height: 24,
        marginLeft: 2,
        borderRadius: 12
    },
    commentsBtns: {
        paddingRight: 10,
        justifyContent: 'center'
    },
    xMark: {
        width: 15,
        height: 15
    },
});
