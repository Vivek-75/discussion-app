import express, { Request, Response } from 'express';
import { Discussion } from '../models/discussion';



export const myDiscussion = async (req: Request, res: Response) => {
  try{
    console.log('myDiscussion');
    const userId = req.user?._id
    console.log('mydiscussion', userId);
    if(!userId)
      return res.status(404).json({message: 'user not found'})

    const discussions = await Discussion.find({author: userId})
    if(!discussions) 
      return res.status(404).json({message: 'discussion not found'})

    res.status(200).json(discussions)
  }
  catch (err: unknown) {
    console.log('error in creating new discussion');
    res.status(500).json({message: err})
  }
}

