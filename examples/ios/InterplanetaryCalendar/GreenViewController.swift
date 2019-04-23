//
//  GreenViewController.swift
//  InterplanetaryCalendar
//
//  Created by Venture Stegasaur on 4/14/19.
//  Copyright © 2019 Steve Richey. All rights reserved.
//

import Foundation
import UIKit

class GreenViewController: UIViewController, UITextFieldDelegate {
    @IBOutlet weak var myTextField: UITextField!

    override func viewDidLoad() {
        super.viewDidLoad()

        myTextField.delegate = self

        view.backgroundColor = #colorLiteral(red: 0.9254902005, green: 0.2352941185, blue: 0.1019607857, alpha: 1)
    }

    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true
    }
}
