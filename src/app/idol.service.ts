import { Injectable } from '@angular/core';

import {Idol} from './idol';
import {IDOLS} from './mock-idols';

//SERVICES PART
@Injectable()
export class IdolService {
	getIdols(): Idol[] {
			return IDOLS;
	};
}