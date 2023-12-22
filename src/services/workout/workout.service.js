import { $axios } from '../../../api'
import { WORKOUTS } from '../../../app.constants'

class WorkoutService {
	async getAll() {
		return $axios.get(WORKOUTS)
	}

	//names, exercisesIds
	async getById(id) {
		return $axios.get(`${WORKOUTS}/${id}`)
	}

	//names, times, iconPath
	async create(body) {
		return $axios.post(WORKOUTS, body)
	}

	async update(id, body) {
		return $axios.put(`${WORKOUTS}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${WORKOUTS}/${id}`)
	}
}

export default new WorkoutService()
