import { $axios } from '../../../api'
import { EXERCISES } from '../../../app.constants'

class ExerciseService {
	async getAll() {
		return $axios.get(EXERCISES)
	}

	//names, times, iconPath
	async create(body) {
		return $axios.post(EXERCISES, body)
	}

	async update(id, body) {
		return $axios.put(`${EXERCISES}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${EXERCISES}/${id}`)
	}
}

export default new ExerciseService()
