import { apiProvider } from '../../../src/api/api-provider';

describe('API provider', () => {
  it('should fetch the users', async () => {
    const response = await apiProvider.getUsers();

    expect(response.status).toBe(200);
    expect(response.data.results.length).toBe(30);
  });

  it('should fetch the workouts of one user', async () => {
    const user = 'hrodriguez';
    const response = await apiProvider.getUserWorkouts(user);

    expect(response.status).toBe(200);
    expect(response.data.results.length).toBe(30);
  });
});
