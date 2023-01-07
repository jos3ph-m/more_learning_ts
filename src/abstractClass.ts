class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ) {

  }

  abstract getSepia(): void
}

class Instagram extends TakePhoto{

}

const joeyMed = new TakePhoto("test", "Test")

