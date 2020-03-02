class IdGenerator {
  static id = 0;
  static getId() {

    return IdGenerator.id++;
  }

}

export default IdGenerator;