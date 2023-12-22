import { $axios } from '../../../api'
import { EXERCISES_LOG } from '../../../app.constants'

class ExerciseLogService {
	async getById(id) {
		return $axios.get(`${EXERCISES_LOG}/${id}`)
	}

	async create(exerciseId) {
		return $axios.post(`${EXERCISES_LOG}/${exerciseId}`)
	}

	async updateTime(timeId, body) {
		return $axios.put(`${EXERCISES_LOG}/time/${timeId}`, body)
	}

	async complete(id, body) {
		return $axios.patch(`${EXERCISES_LOG}/complete/${id}`, body)
	}
}

export default new ExerciseLogService()
