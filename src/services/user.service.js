import { $axios } from '../../api'
import { USERS } from '../../app.constants'

class UserService {
	async getProfile() {
		return $axios.get(`${USERS}/profile`)
	}
}

export default new UserService()
