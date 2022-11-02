

class TresRaya {
  tiradas = new Array(9).fill('-');
  turno = 'X';

  estado() {
    return this.tiradas;
  }

  hayGanador() {
    if (this.tiradas[0] === this.tiradas[1] && this.tiradas[0] === this.tiradas[2] && this.tiradas[0] !=='-') {
      return true;
    }

    if (this.tiradas[3] === this.tiradas[4] && this.tiradas[3] === this.tiradas[5] && this.tiradas[3] !=='-') {
      return true;
    }

    if (this.tiradas[6] === this.tiradas[7] && this.tiradas[6] === this.tiradas[8] && this.tiradas[6] !=='-') {
      return true;
    }

    if (this.tiradas[0] === this.tiradas[3] && this.tiradas[0] === this.tiradas[6] && this.tiradas[0] !=='-') {
      return true;
    }

    if (this.tiradas[1] === this.tiradas[4] && this.tiradas[1] === this.tiradas[7]  && this.tiradas[1] !=='-') {
      return true;
    }

    if (this.tiradas[2] === this.tiradas[5] && this.tiradas[2] === this.tiradas[8]  && this.tiradas[2] !=='-') {
      return true;
    }

    if (this.tiradas[0] === this.tiradas[4] && this.tiradas[0] === this.tiradas[8]  && this.tiradas[0] !=='-') {
      return true;
    }

    if (this.tiradas[2] === this.tiradas[4] && this.tiradas[2] === this.tiradas[6]  && this.tiradas[2] !=='-') {
      return true;
    }

    return false;
  }

  jugada(indice) {
    try {
      if (indice < 0 || indice > 8) {
        throw 'Casilla errónea';
      }

      if (this.tiradas[indice] === 'X' || this.tiradas[indice] === 'O' ) {
        throw 'Ya has tirado en esa casilla';
      }

      this.tiradas[indice] = this.turno;
      if(this.hayGanador()) {
        return 'Enhorabuena, ha ganado el jugador ' + this.turno;
      }
      this.turno = (this.turno ==='X' ? 'O' : 'X');
      return 'Turno para jugador ' + this.turno;
      
    } catch (error) {
        return (error); 
    }
  }

}

export {
  TresRaya
}