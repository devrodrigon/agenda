import { Request, Response } from 'express';
import profileService from '../../services/sessions/profile.service';

const profileController = async (request: Request, response: Response) => {
  const { id } = request.user;

  const profile = await profileService(id);

  return response.status(200).json(profile);
};

export default profileController;
