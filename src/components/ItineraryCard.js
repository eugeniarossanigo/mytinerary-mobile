import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react';
import ActivityCard from './ActivityCard';
import CommentCard from './CommentCard';
import { useGetActivityItineraryQuery } from '../redux/activitiesAPI';
import { useCreateNewCommentMutation, useGetAllCommentsMutation } from '../redux/commentsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { reload } from '../redux/reloadSlice';
import { useDeleteItineraryMutation, useLikeDislikeMutation } from '../redux/itinerariesAPI';

export default function ItineraryCard({itinerary}) {
    const [open, setOpen] = useState(false)
    const [arrayComments, setArrayComments] = useState([])
    const likesLength = itinerary.likes.length
    const reloaded = useSelector(state => state.reload.reloadState)
    // const [tokenUser, setTokenUser] = useState()
    // AsyncStorage.getItem('token').then(value => setTokenUser(value))

    const {data: activities} = useGetActivityItineraryQuery(itinerary._id)
    const [showComments] = useGetAllCommentsMutation()

    const handleShowComments = async() =>{
        try {
            let res = await showComments(itinerary._id)
            setArrayComments(res?.data.response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleShowComments()
    }, [reloaded, itinerary])

    const [addComment] = useCreateNewCommentMutation()
    const [newComment, setNewComment] = useState("") 

    const sendComment = async() => {
        const ids = {user: user?.id, itinerary: itinerary._id}
        await addComment({...ids, comment: newComment})
        dispatch(reload())
    }
   
    const user = useSelector(state => state.auth.user)
    const userId = user?.id
    const dispatch = useDispatch()
    const [deleteItinerary] = useDeleteItineraryMutation()
     
    const handleDelete = async() => {
        await deleteItinerary(itinerary._id)
        dispatch(reload())
    }

    const [likeDislike] = useLikeDislikeMutation()

    const handleLikes = async() => {
        try {
            let res = await likeDislike(itinerary._id)
            if (res?.data.success){
                dispatch(reload())
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <View key={itinerary?._id} style={styles.itineraryContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{itinerary?.name}</Text>
                </View>
                { user && (user?.id === itinerary.user._id) &&
                    <View style={styles.btnsContainer}>
                        <View style={styles.btn}>
                            <Button color='#377771' title="EDIT" onPress={() => console.log("edit")} />
                        </View>
                        <View style={styles.btn}>
                            <Button color='#377771' title="DELETE" onPress={handleDelete} />
                        </View>
                    </View>
                }
                <View style={styles.info}>
                    <View>
                        <Text style={styles.h3}>Duration:</Text>
                        <Text style={styles.h2}>{itinerary?.duration} hours</Text>
                    </View>
                    <View>
                        <Text style={styles.h3}>Price:</Text>
                        <Text style={styles.h2}>${itinerary?.price}</Text>
                    </View>
                    <View>
                        <Text style={styles.h3}>Likes:</Text>
                        <View style={styles.likes}>
                            <TouchableOpacity onPress={handleLikes}>
                                { user && itinerary.likes.includes(userId) ?
                                    <Image style={styles.heart} source={require("../../assets/heart-full.png")} />
                                :
                                    <Image style={styles.heart} source={require("../../assets/heart-empty.png")} />
                                }
                            </TouchableOpacity>
                            <Text>{likesLength}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.info}>
                    <View>
                        <Text style={styles.h3}>Tags:</Text>
                        <Text style={styles.h2}>{itinerary?.tags.map(tag => " #"+tag)}</Text>
                    </View>
                </View>
                <View style={styles.activitiesContainer}>
                    {activities?.response.map(activity => <ActivityCard activity={activity} />)}
                </View>
                <Text style={styles.p}>Leave us your comment below</Text>
                <View style={styles.btnsContainer}>
                    <TouchableOpacity style={styles.btnDown} onPress={() => { open ? setOpen(false) : setOpen(true) }}>
                        <Image style={styles.arrowDown} source={require('../../assets/down-arrow.png')}></Image>
                    </TouchableOpacity>
                </View>
                { open ?
                    <View>
                        { user &&
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputComment} type="text" placeholder="Comment here!" onChangeText={comment => setNewComment(comment)}/>
                                <TouchableOpacity style={styles.btnSend} onPress={sendComment}>
                                    <Image style={styles.arrowSend} source={require('../../assets/arrow-send.png')} />
                                </TouchableOpacity>
                            </View>
                        }
                        <View style={styles.commentsContainer}>
                            {arrayComments?.map(comment => <CommentCard comment={comment}/>)}
                        </View>
                    </View>
                : null
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    itineraryContainer: {
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    titleContainer: {
        width: 360,
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 10
    },
    title: {
        color: '#78788c',
        borderBottomColor: '#377771',
        borderBottomWidth: 2,
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: '800'
    },
    btnsContainer:{
        width: 360,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15
    },
    btn: {
        width: 80,
        paddingRight: 5,
        paddingLeft: 5
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10
    },
    likes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    h2: {
        color: '#000',
        fontWeight: '300',
    },
    h3: {
        color: '#000',
        fontWeight: '700',
    },
    heart: {
        width: 18,
        height: 18
    },
    activitiesContainer: {
        alignSelf: 'center'
    },
    p: {
        alignSelf: 'center'
    },
    commentsContainer: {
        alignSelf: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 20,
    },
    inputComment: {
        width: 300,
        backgroundColor: 'rgba(223, 170, 91, 0.5)',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 10,
        marginBottom: 20,
        borderRadius: 15,
    },
    btnDown: {
        paddingTop: 5,
    },
    btnSend: {
        paddingTop: 5,
    },
    arrowDown: {
        width: 20,
        height: 20
    },
    arrowSend: {
        width: 20,
        height: 20
    }
})
